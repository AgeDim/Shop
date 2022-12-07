CREATE TYPE product_type AS ENUM ('rod', 'coil', 'fishing_line', 'hook', 'lure', 'bait', 'leash', 'sinker',
    'feeder', 'pack', 'feeding_up', 'base', 'additive', 'flavoring');

CREATE TYPE order_status AS ENUM ('in_process', 'done', 'fail');

CREATE TABLE product (
    id SERIAL primary key,
    name varchar(255) NOT NULL,
    product_type INT NOT NULL,
    default_price money NOT NULL,
    description json NOT NULL,
    amount INT NOT NULL,
    picture_path varchar(255) NOT NULL,
    CHECK (default_price::numeric > 0)
);

CREATE TABLE shop(
                     id SERIAL PRIMARY KEY,
                     address varchar(100) NOT NULL,
                     time_open time NOT NULL,
                     time_close time NOT NULL,
                     coefficient REAL NOT NULL
);

CREATE TABLE fish
(
    id         serial primary key,
    name varchar(255) NOT NULL,
    length_max REAL,
    length_min REAL,
    weight_max REAL,
    weight_min REAL,
    habitat    varchar(255),
    CHECK ( weight_min >= 0 ),
    CHECK ( length_min >= 0 ),
    CHECK ( length_max > length_min ),
    CHECK ( length_max >= 0 ),
    Check ( weight_max >= 0 ),
    CHECK ( weight_max > weight_min )
);

CREATE TABLE storage
(
    id      serial primary key,
    address varchar(100) NOT NULL
);

CREATE TABLE "user"(
                       id           serial primary key,
                       password     varchar(255) NOT NULL,
                       email        varchar(255) NOT NULL,
                       admin_rights bool
);

CREATE TABLE product_storage_match(
    id serial primary key,
    product_id serial NOT NULL,
    storage_id serial NOT NULL,
    product_amount INT NOT NULL,
    CHECK (product_amount >=0),
    FOREIGN KEY (product_id) REFERENCES product(id) ON DELETE CASCADE,
    FOREIGN KEY (storage_id) REFERENCES storage(id) ON DELETE CASCADE
);

CREATE TABLE product_shop_match(
    id serial primary key,
    shop_id serial NOT NULL,
    product_id serial NOT NULL,
    new_price money NOT NULL,
    product_amount INT
);

CREATE TABLE "order"(
    id SERIAL primary key,
    user_id SERIAL NOT NULL,
    products_id INT[] NOT NULL,
    order_time timestamp,
    amounts INT[],
    shop_id SERIAL,
    storage_id SERIAL,
    status INT NOT NULL,
    FOREIGN KEY (shop_id) REFERENCES shop(id) ON DELETE CASCADE,
    FOREIGN KEY (storage_id) REFERENCES storage(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES "user"(id) ON DELETE CASCADE
);

CREATE TABLE favorite(
    id SERIAL primary key,
    user_id SERIAL NOT NULL,
    product_id SERIAL NOT NULL,
    FOREIGN KEY (user_id) REFERENCES "user"(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES product(id) on DELETE CASCADE
);

CREATE TABLE product_fish_match(
    id serial primary key,
    product_id serial NOT NULL,
    fish_id serial NOT NULL,
    FOREIGN KEY (product_id) REFERENCES product(id) ON DELETE cascade,
    FOREIGN KEY (fish_id) REFERENCES fish(id) ON DELETE cascade
);