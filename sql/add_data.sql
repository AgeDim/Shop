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