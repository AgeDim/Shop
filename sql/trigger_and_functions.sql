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

CREATE TRIGGER push_product_to_shop AFTER INSERT ON additive
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