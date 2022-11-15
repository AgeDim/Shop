/* Триггер №1 - при доабвлении продукта продукт добавляется на склад */
CREATE OR REPLACE FUNCTION add_product_in_storage()
RETURNS TRIGGER AS $$
    declare
        storage_ids INT[] := (SELECT id FROM storage);
    begin
        for i in storage_ids LOOP
            INSERT INTO product_storage_match(product_id, storage_id, product_amount)
            VALUES (new.id, i, 0);
        END LOOP;
    end;
$$ language 'plpgsql';

CREATE TRIGGER push_additive_to_storage AFTER INSERT ON additive
    EXECUTE PROCEDURE add_product_in_storage();
CREATE TRIGGER push_bait_to_storage AFTER INSERT ON bait
    EXECUTE PROCEDURE add_product_in_storage();
CREATE TRIGGER push_base_to_storage AFTER INSERT ON base
    EXECUTE PROCEDURE add_product_in_storage();
CREATE TRIGGER push_coil_to_storage AFTER INSERT ON coil
    EXECUTE PROCEDURE add_product_in_storage();
CREATE TRIGGER push_feeder_to_storage AFTER INSERT ON feeder
    EXECUTE PROCEDURE add_product_in_storage();
CREATE TRIGGER push_fishing_line_to_storage AFTER INSERT ON fishing_line
    EXECUTE PROCEDURE add_product_in_storage();
CREATE TRIGGER push_flavoring_to_storage AFTER INSERT ON flavoring
    EXECUTE PROCEDURE add_product_in_storage();
CREATE TRIGGER push_hook_to_storage AFTER INSERT ON hook
    EXECUTE PROCEDURE add_product_in_storage();
CREATE TRIGGER push_leashes_to_storage AFTER INSERT ON leashes
    EXECUTE PROCEDURE add_product_in_storage();
CREATE TRIGGER push_lure_to_storage AFTER INSERT ON lure
    EXECUTE PROCEDURE add_product_in_storage();
CREATE TRIGGER push_pack_to_storage AFTER INSERT ON pack
    EXECUTE PROCEDURE add_product_in_storage();
CREATE TRIGGER push_rod_to_storage AFTER INSERT ON rod
    EXECUTE PROCEDURE add_product_in_storage();
CREATE TRIGGER push_sinker_to_storage AFTER INSERT ON sinker
    EXECUTE PROCEDURE add_product_in_storage();

/* Триггер №2 - при добавлении продукта продукт добавляется в магазин*/
CREATE OR REPLACE FUNCTION add_product_in_shop()
    RETURNS TRIGGER AS $$
declare
    shops_ids INT[] := (SELECT id FROM shop);
    price_coef INT;
begin
    for i in shops_ids LOOP
            price_coef = (SELECT coefficient FROM shop WHERE shop.id = i);
            INSERT INTO product_shop_match(product_id, shop_id, new_price, product_amount)
            VALUES (new.id, i, price_coef*new.default_price, 0);
        END LOOP;
end;
$$ language 'plpgsql';

CREATE TRIGGER push_additive_to_shop AFTER INSERT ON additive
    EXECUTE PROCEDURE add_product_in_shop();
CREATE TRIGGER push_bait_to_storage AFTER INSERT ON bait
    EXECUTE PROCEDURE add_product_in_shop();
CREATE TRIGGER push_base_to_shop AFTER INSERT ON base
    EXECUTE PROCEDURE add_product_in_shop();
CREATE TRIGGER push_coil_to_shop AFTER INSERT ON coil
    EXECUTE PROCEDURE add_product_in_shop();
CREATE TRIGGER push_feeder_to_shop AFTER INSERT ON feeder
    EXECUTE PROCEDURE add_product_in_shop();
CREATE TRIGGER push_fishing_line_to_shop AFTER INSERT ON fishing_line
    EXECUTE PROCEDURE add_product_in_shop();
CREATE TRIGGER push_flavoring_to_shop AFTER INSERT ON flavoring
    EXECUTE PROCEDURE add_product_in_shop();
CREATE TRIGGER push_hook_to_shop AFTER INSERT ON hook
    EXECUTE PROCEDURE add_product_in_shop();
CREATE TRIGGER push_leashes_to_shop AFTER INSERT ON leashes
    EXECUTE PROCEDURE add_product_in_shop();
CREATE TRIGGER push_lure_to_shop AFTER INSERT ON lure
    EXECUTE PROCEDURE add_product_in_shop();
CREATE TRIGGER push_pack_to_shop AFTER INSERT ON pack
    EXECUTE PROCEDURE add_product_in_shop();
CREATE TRIGGER push_rod_to_shop AFTER INSERT ON rod
    EXECUTE PROCEDURE add_product_in_shop();
CREATE TRIGGER push_sinker_to_shop AFTER INSERT ON sinker
    EXECUTE PROCEDURE add_product_in_shop();

/* Триггер №3 - Проверка наличия на складе продукта при добавлении его в заказ */
CREATE OR REPLACE FUNCTION check_product_amount_in_storage(prod_id int, handled_amount int)
RETURNS TRIGGER AS $$
    declare
        storage_ids INT[];
        prod_amount_in_stor INT;
    begin
        storage_ids = (SELECT DISTINCT storage_id FROM product_storage_match WHERE prod_id = product_id);
        for i in storage_ids LOOP
              prod_amount_in_stor = (SELECT product_amount FROM product_storage_match WHERE storage_id = i);
              if (prod_amount_in_stor > handled_amount) then
                  return new;
              end if;
        end loop;
        return null;
    end;
$$ language 'plpgsql';

CREATE TRIGGER check_order_product_in_storage BEFORE INSERT ON "order"
    EXECUTE PROCEDURE check_product_amount_in_storage(new.product_match, new.product_amount);

/* Триггер №4 - Проверка наличия в магазине продукта при добавлении его в заказ */
CREATE OR REPLACE FUNCTION check_product_amount_in_shop(prod_id int, handled_amount int)
RETURNS TRIGGER AS $$
    declare
        shops_ids INT[];
        prod_amount_in_shop INT;
    begin
        shops_ids = (SELECT DISTINCT shop_id FROM product_shop_match WHERE prod_id = product_id);
        for i in shop_ids LOOP
            prod_amount_in_shop = (SELECT product_amount FROM product_shop_match WHERE shop_id = i);
            if (prod_amount_in_shop > handled_amount) then
                return new;
            end if;
        end loop;
    return null;
    end;
$$ language 'plpgsql';

CREATE TRIGGER check_order_product_in_shop BEFORE INSERT ON "order"
EXECUTE PROCEDURE check_product_amount_in_shop(new.product_match, new.product_amount);

/* Триггер №5 - Определение типа сборки перед ее добавлением */
CREATE OR REPLACE FUNCTION handle_pack_type(rod int, coil int, fishing_line int)
RETURNS TRIGGER AS $$
    declare
        rod_pack_type TEXT = (SELECT fish_product_match.pack_type FROM fish_product_match WHERE rod = product_id);
        coil_pack_type TEXT = (SELECT fish_product_match.pack_type FROM fish_product_match WHERE coil = product_id);
        fishing_line_pack_type TEXT = (SELECT fish_product_match.pack_type FROM fish_product_match WHERE fishing_line =
                                                                                                   product_id);
    begin
        if (rod_pack_type IS NOT NULL) then
              new.pack_type = rod_pack_type;
        else if (coil_pack_type IS NOT NULL) then
              new.pack_type = coil_pack_type;
              else new.pack_type = fishing_line_pack_type;
             end if;
        end if;
    end;
$$ language 'plpgsql';

CREATE TRIGGER add_pack_type_to_pack BEFORE INSERT on pack
    EXECUTE PROCEDURE handle_pack_type(new.rod_id, new.coil_id, new.fishing_line_id);

/* Функция создания сборки */
CREATE OR REPLACE FUNCTION create_pack(rod int, coil int, fishing_line int)
    returns void as $$
begin
    INSERT INTO pack(rod_id, coil_id, fishing_line_id)
    VALUES (rod, coil, fishing_line);
end;
$$ language 'plpgsql';

/* Функция создания прикорма */
CREATE OR REPLACE FUNCTION create_lure_complex(base_id int, additive1_id int, additive2_id int, additive3_id int, additive4_id int, flavoring_id int)
returns void as $$
    begin
        INSERT INTO lure_complex (base, additive_1, additive_2, additive_3, additive_4, flavoring, default_price)
        VALUES (base_id, additive1_id, additive2_id, additive3_id, additive4_id, flavoring_id, 0);
    end;
$$ language 'plpgsql'



