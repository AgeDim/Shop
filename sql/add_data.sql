INSERT INTO product (name, product_type, default_price, description, amount, img_name)
VALUES ('Fortuna Carp', 1, 4000,
        '{action: medium, hardeness : 8, power : 7, test_min : 20, test_max : 110, length : 3.6, strength : 70.2, weigth : 270}',
        0, 'fortuna_carp.png');

INSERT INTO product(name, product_type, default_price, description, amount, img_name)
VALUES ('Superline', 3, 1000,
        '{type:neylon, color: white,length: 120,diameter: 0.1,strength: 700}',
        0, 'superline.png');

INSERT INTO product(name, product_type, default_price, description, amount, img_name)
VALUES ('Beluga Venga', 2, 18790,
        '{type: inertialess, size : 6000, gear_ratio : 5.5, friction_brake_force : 22.6, capasity : 264, diameter_fishing_liny : 0.28}',
        0, 'beluga_venga.png');

INSERT INTO product(name, product_type, default_price, description, amount, img_name)
VALUES ('Deadly loop CL-18', 4, 750,
        '{type : carp, size : 12, weight : 0.33, color : brown}',
        0, 'deadly_loop_18.png');

INSERT INTO product(name, product_type, default_price, description, amount, img_name)
VALUES ('Steel leader 1512', 7, 200,
        '{type : default, material : neylon, lenght : 15, diameter : 0.25, strenght : 6}',
        0, 'steel_leader_1512.png');

INSERT INTO product(name, product_type, default_price, description, amount, img_name)
VALUES ('Carp lure complex', 11, 1000,
        '{base : flax seed, additive1 : corn, additive2 : biscuit, additive3 : cream, flavoring : Caramell}',
        0, 'carp_feeding_up.png');

INSERT INTO product(name, product_type, default_price, description, amount, img_name)
VALUES ('Helen Van Zandt(Вареное пшено)', 12, 100,
        '{amount : 1}',
        0, 'helen_van_zaldt_psheno.png');

INSERT INTO product(name, product_type, default_price, description, amount, img_name)
VALUES ('Helen Van Zandt(Кукуруза)', 13, 100,
        '{amount : 1}',
        0, 'helen_van_zaldt_corn.png');

INSERT INTO product(name, product_type, default_price, description, amount, img_name)
VALUES ('Helen Van Zandt(Карамель)', 14, 300,
        '{amount : 10}',
        0, 'helen_van_zaldt_caramel.png');

INSERT INTO product(name, product_type, default_price, description, amount, img_name)
VALUES ('Westhill Flat sinker', 8, 500,
        '{color : gray, type : bottom inline, bracing : swivel, weight : 10}',
        0, 'westhill_flat_sinker.png');

INSERT INTO product(name, product_type, default_price, description, amount, img_name)
VALUES ('Worm', 5, 200,
        '{type : worm, weight : 0.5, buoyancy : false, amount : 30}',
        0, 'worm.png');

INSERT INTO product(name, product_type, default_price, description, amount, img_name)
VALUES ('Express Fishing Furry', 6, 300,
        '{type : spinner, size : small, weight : 2.5, heigth : 4, deepening : -}',
        0, 'express_fishing_furry.png');

INSERT INTO product(name, product_type, default_price, description, amount, img_name)
VALUES ('Westhill Masked mesh 20', 9, 650,
        '{type : classic, bracing : swivel, weight : 20, capacity : 1}',
        0, 'westhill_masked_mash_20.png');

/* Рандомный адрес для магазина или склада */
CREATE OR REPLACE FUNCTION get_address()
    returns varchar(100) as $$
declare
    temp int := trunc(random()*38)::integer+1;
begin
    return (select substring('abcdefghij, klmnopqrstuvwxyz, 0123456789' from temp));
end;
$$ language 'plpgsql';

/* Рандомное время работы магазина*/
CREATE OR REPLACE FUNCTION get_time()
    returns time as $$
begin
    return (SELECT ('00:00:00'::time + random()*24*interval'1 hour'
        + random()*60*interval'1 minute'
        + random()*60*interval'1 second')::time);
end;
$$ language 'plpgsql';

/* Функция для создания рандомного коэффициента цены в магазине*/
CREATE OR REPLACE FUNCTION get_coefficient()
    returns real as $$
    begin
        return (SELECT random()*3);
    end;
$$ language 'plpgsql';

/* Функция для создания рандомной длины рыбы */
CREATE OR REPLACE FUNCTION get_length()
    returns real as $$
begin
    return (SELECT random()*7);
end;
$$ language 'plpgsql';

/* Функция для создания рандомного веса рыбы */
CREATE OR REPLACE FUNCTION get_weight()
    returns real as $$
begin
    return (SELECT random()*255);
end;
$$ language 'plpgsql';

/* Функция создания имени рыбы*/
CREATE OR REPLACE FUNCTION get_fish_name()
    returns varchar(255) as $$
declare
    temp int := trunc(random()*20)::integer+1;
begin
    return (select substring('abcdefghijklmnopqrstuvwxyzjklmnopqrvwxyzbcdefghia' from temp));
end;
$$ language 'plpgsql';


/* Функция создания среды обитания рыбы*/
CREATE OR REPLACE FUNCTION get_fish_habitat()
    returns varchar(255) as $$
declare
    temp int := trunc(random()*50)::integer+1;
begin
    return (select substring('abcdefghi jklmnopqrst uvwxyzjklmnopq rvwxyzbcdefghia, klmnopqrs tuvwxyz' from temp));
end;
$$ language 'plpgsql';

/* Заполнение магазинами */
CREATE OR REPLACE FUNCTION fill_random_20_shops()
    returns void as $$
begin
    for i in 0..20 LOOP
            INSERT INTO shop (address, coefficient, time_open, time_close)
            VALUES (get_address(), get_coefficient(), get_time(), get_time());
        end loop;
end;
$$ language 'plpgsql';

/* Заполнение складами */
CREATE OR REPLACE FUNCTION fill_random_20_storages()
    returns void as $$
begin
    for i in 0..20 LOOP
            INSERT INTO storage (address)
            VALUES (get_address());
        end loop;
end;
$$ language 'plpgsql';

/* Заполнение рыбами */
CREATE OR REPLACE FUNCTION fill_random_6_fishes()
    returns void as $$
begin
    for i in 0..6 LOOP
            INSERT INTO fish(name, length_max, length_min, weight_max, weight_min, habitat)
            VALUES (get_fish_name(), get_length(), get_length(), get_weight(), get_weight(), get_fish_habitat());
        end loop;
end;
$$ language 'plpgsql';