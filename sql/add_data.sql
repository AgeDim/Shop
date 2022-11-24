INSERT INTO product (name, product_type, default_price, description, amount, picture_path)
VALUES ('Fortuna Carp', 'rod', 4000,
        json_object('action , medium, hardeness , 8, power , 7, test_min , 20, test_max , 110, length , 3.6, strength , 70.2, weigth , 270'),
        0, 'C:\Downloads\fortuna_carp.png');

INSERT INTO product(name, product_type, default_price, description, amount, picture_path)
VALUES ('Superline', 'fishing_line', 1000,
        json_object('{type,neylon, color, white,length, 120,diameter, 0.1,strength, 700}'),
        0, 'C:\Downloads\superline.png');

INSERT INTO product(name, product_type, default_price, description, amount, picture_path)
VALUES ('Beluga Venga', 'coil', 18790,
        json_object('{type,inertialess, size, 6000, gear_ratio, 5.5,friction_brake_force,22.6,capasity,264, diameter_fishing_liny,0.28}'),
        0, 'C:\Downloads\beluga_venga.png');

INSERT INTO product(name, product_type, default_price, description, amount, picture_path)
VALUES ('Deadly loop CL-18', 'hook', 750,
        json_object('{type, carp, size, 12,weight, 0.33,color, brown}'),
        0, 'C:\Downloads\deadly_loop_18.png');

INSERT INTO product(name, product_type, default_price, description, amount, picture_path)
VALUES ('Deadly loop CL-18', 'hook', 750,
        json_object('{type, carp, size, 12, weight, 0.33,color, brown}'),
        0, 'C:\Downloads\deadly_loop_18.png');

INSERT INTO product(name, product_type, default_price, description, amount, picture_path)
VALUES ('Steel leader 1512', 'leash', 200,
        json_object('{type, default, material, neylon, lenght, 15, diameter, 0.25, strenght,6}'),
        0, 'C:\Downloads\steel_leader_1512.png');

INSERT INTO product(name, product_type, default_price, description, amount, picture_path)
VALUES ('Carp lure complex', 'feeding_up', 1000,
        json_object('{base, flax seed, additive1, corn, additive2, biscuit, additive3, cream, flavoring, Caramell}'),
        0, 'C:\Downloads\carp_feeding_up.png');

INSERT INTO product(name, product_type, default_price, description, amount, picture_path)
VALUES ('Helen Van Zandt(Вареное пшено)', 'base', 100,
        json_object('{amount, 1}'),
        0, 'C:\Downloads\helen_van_zaldt_psheno.png');

INSERT INTO product(name, product_type, default_price, description, amount, picture_path)
VALUES ('Helen Van Zandt(Кукуруза)', 'additive', 100,
        json_object('{amount, 1}'),
        0, 'C:\Downloads\helen_van_zaldt_corn.png');

INSERT INTO product(name, product_type, default_price, description, amount, picture_path)
VALUES ('Helen Van Zandt(Карамель)', 'flavoring', 300,
        json_object('{amount, 10}'),
        0, 'C:\Downloads\helen_van_zaldt_caramel.png');

INSERT INTO product(name, product_type, default_price, description, amount, picture_path)
VALUES ('Westhill Flat sinker', 'sinker', 500,
        json_object('{color, gray, type, bottom inline, bracing, swivel, weight, 10}'),
        0, 'C:\Downloads\westhill_flat_sinker.png');

INSERT INTO product(name, product_type, default_price, description, amount, picture_path)
VALUES ('Worm', 'lure', 200,
        json_object('{type, worm, weight, 0.5, buoyancy, false, amount, 30}'),
        0, 'C:\Downloads\worm.png');

INSERT INTO product(name, product_type, default_price, description, amount, picture_path)
VALUES ('Express Fishing Furry', 'bait', 300,
        json_object('{type, spinner, size, small, weight, 2.5, heigth, 4, deepening, -}'),
        0, 'C:\Downloads\express_fishing_furry.png');


INSERT INTO product(name, product_type, default_price, description, amount, picture_path)
VALUES ('Westhill Masked mesh 20', 'feeder', 650,
        json_object('{type, classic, bracing, swivel, weight, 20, capacity, 1}'),
        0, 'C:\Downloads\westhill_masked_mash_20.png');

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