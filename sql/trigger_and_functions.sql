/* Триггер №1 - при доабвлении продукта продукт добавляется на склад */
CREATE OR REPLACE FUNCTION add_product_in_storage()
    RETURNS TRIGGER AS $$
declare
    storage_ids INT[] := (SELECT id FROM storage);
    i int;
begin
    foreach i in array storage_ids LOOP
            INSERT INTO product_storage_match(product_id, storage_id, product_amount)
            VALUES (new.id, i, 0);
        END LOOP;
end;
$$ language 'plpgsql';

CREATE TRIGGER push_product_to_storage AFTER INSERT ON product
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

CREATE TRIGGER push_product_to_shop AFTER INSERT ON product
    EXECUTE PROCEDURE add_product_in_shop();

/* Функция для подсчета количества товаров в магазинах */
CREATE OR REPLACE FUNCTION get_amount_of_object_from_storage(object_id int)
    returns INT as $$
begin
    return (select sum(product_amount) FROM product_storage_match where product_id = object_id);
end;
$$ language 'plpgsql';

/* Функция для посчета количества товаров на складах */
CREATE OR REPLACE FUNCTION get_amount_of_object_from_shop(object_id int)
    returns INT as $$
begin
    return (select sum(product_amount) FROM product_shop_match where product_id = object_id);
end;
$$ language 'plpgsql';

/* Триггер №3 - Проверка соответствующего количества товара в наличии */
CREATE OR REPLACE FUNCTION check_product_amount()
    RETURNS TRIGGER AS $$
declare
    product_to_add_amount INT := array_length(new.products_id, 1);
    sums INT[] = new.amounts;
begin
    for i in 1..product_to_add_amount LOOP
        sums[i] = 0;
    end loop;
    for i in 1..product_to_add_amount LOOP
            sums[i] = sums[i] + get_amount_of_object_from_shop(new.products_id[i]::int)
                + get_amount_of_object_from_storage(new.products_id[i]::int);
        end loop;
    for i in 1..product_to_add_amount LOOP
            if (new.amounts[i]::int > sums[i]::int) then
                RAISE EXCEPTION 'Недостаточно товара с id: %', new.products_id[i]::int;
            end if;
        end loop;
    return;
end;
$$ language 'plpgsql';


CREATE OR REPLACE TRIGGER handle_order BEFORE INSERT ON "order"
    FOR EACH ROW
EXECUTE PROCEDURE check_product_amount();

/* Триггер №4 - уменьшение количества товара после выполнения заказа */
CREATE OR REPLACE FUNCTION update_product_amount()
    RETURNS TRIGGER AS $$
begin
    if (new.status = 'done') then
        if (new.shop_id IS NOT NULL) then
            for i in 0..array_length(new.products_id)-1 LOOP
                    UPDATE product SET amount = amount - new.amounts[i] WHERE id = new.products_id[i];
                    UPDATE product_shop_match SET product_amount = product_amount - new.amounts[i] WHERE product_id = new.products_id[i];
                end loop;
        else
            for i in 0..array_length(new.products_id)-1 LOOP
                    UPDATE product SET amount = amount - new.amounts[i] WHERE id = new.products_id[i];
                    UPDATE product_storage_match SET product_amount = product_amount - new.amounts[i] WHERE product_id = new.products_id[i];
                end loop;
        end if;
    end if;
end;
$$ language 'plpgsql';

CREATE OR REPLACE TRIGGER handle_product_amount BEFORE UPDATE on "order"
EXECUTE PROCEDURE update_product_amount();

/* Функция для выбора заказов по id юзера */
CREATE OR REPLACE FUNCTION get_orders_by_user_id(id_user int)
    returns INT[] as $$
begin
    return (select id FROM "order" where user_id = id_user);
end;
$$ language 'plpgsql';

/* Функция для выбора всех рыб, соответствующих определенному продукту */
CREATE OR REPLACE FUNCTION get_fishes_by_product_id(prod_id int)
    returns INT[] as $$
    begin
        return (select fish_id FROM product_fish_match where product_id = prod_id);
    end;
$$ language 'plpgsql';

/* Индекс для более быстрого поиска по избранному */
CREATE INDEX hash_user_id ON favorite USING HASH (user_id);

/* Индекс для более */
CREATE INDEX hash_user_id ON "order" USING HASH (user_id);

/* Индекс для amount */
CREATE INDEX hash_amount ON product USING btree (amount);
