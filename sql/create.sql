/* Объявление енамов*/
CREATE TYPE row_type AS ENUM ('flywheels', 'bolognese', 'match','spinning','casting','jerk','feeder', 'picker', 'carp');
CREATE TYPE action AS ENUM ('slow', 'medium', 'fast','ultra_fast');
CREATE TYPE power AS ENUM ('ultra_hard', 'hard', 'medium','lite','ultra_lite');
CREATE TYPE fishing_line_type AS ENUM ('neylon', 'f_carbon', 'cord');
CREATE TYPE color AS ENUM ('clear', 'lite_green', 'grey','white','lite_blue','green','brown','dark_green','emerald','pink','yellow','orange');
CREATE TYPE material_of_leashes AS ENUM ('neylon', 'f_carbon', 'cord','metalic');
CREATE TYPE leashes_type AS ENUM ('default', 'feeder', 'hinged leashes','leadcore');
CREATE TYPE sinker_type AS ENUM ('bottom_classic', 'bottom_inline', 'jig','jig weight bullets','marker');
CREATE TYPE lure_type AS ENUM ('worm', 'larva', 'natural','insects','crayfish','sinking_boilies','pop-up_boilies','pellts','artifical_corn','dips');
CREATE TYPE size_bait AS ENUM ('small', 'medium', 'huge');
CREATE TYPE bait_type AS ENUM ('spinner', 'snaker', 'wobbler','topwobbler','jackbaiter','soft lures','wacky worms');
CREATE TYPE feeder_type AS ENUM ('classic', 'inline', 'method');
CREATE TYPE bracing AS ENUM ('swivel', 'inline');
CREATE TYPE base AS ENUM ('ground_crackers', 'semolina', 'ground_barley','sunflower_seed','wheat_bran','ground_corn','cereals','hemp_seeds','rye_bran','ground_peas','flax_seed','rape_seeds');
CREATE TYPE additive AS ENUM ('boiled_millet', 'corn','peas','bloodworm','maggot','chopped_worm','breadcrumbs','clay','ground_cookies','casters','biscuit','pumpkin_seed','flax-seed','hemp','cream','amino','pineapple','black_currant','honey','tutti-frutti','vanilla','squid_and_herbs','mussels','cherry','sweet_citron','krill','salmon_and_tuna','mango','peach','fish_and_meat','cranberry','crab','caviar','banana');
CREATE TYPE flavoring AS ENUM ('sunflower_oil', 'caramel','vanilla','anise_oil','garlic','dill','linseed_oil','hemp_oil','cinnamon','coriander','honey','banana','cream','peach','pear','strawberry','pineapple','mango','squid','crayfish','black_currant','salmon','black_pepper','tutti-frutti','black_caviar','mulberry','fresh_cut_grass');
CREATE TYPE hooks_type AS ENUM ('classic', 'carp','offsets','triples','jig_head','live_bait');
CREATE TYPE pack_type AS ENUM ('float_fishing_start', 'float_fishing_start+','float_fishing_pro','spinning_light_pro','spinning_light_start','spinning_universal_start','spinning_universal_pro','feeder_start','feeder_pro','carp_start','carp_pro');
CREATE TYPE coil_type AS ENUM
    ('inertialess', 'baitcasting_low_profile', 'baitcasting_classic', 'power_multipliers');

/* Создание сущностей */
CREATE TABLE rod
(
    serial_id     SERIAL PRIMARY KEY,
    name varchar(255) NOT NULL,
    rod_type      rod_type NOT NULL,
    action        action   NOT NULL,
    hardness      int,
    power         power    NOT NULL,
    test_max      int,
    test_min      int,
    length        numeric,
    strength      numeric,
    weight        numeric,
    default_price money,
    check (hardness >= 0 AND hardness <= 10),
    check (test_min >= 1),
    check (length >= 0),
    check (strength >= 0),
    check (weight >= 0),
    check (default_price::numeric >= 0)
);

CREATE TABLE hook
(
    serial_id     serial PRIMARY KEY,
    name varchar(255) NOT NULL,
    hook_type     hooks_type NOT NULL,
    size          varchar(5),
    weight        REAL,
    color         color      Not NULL,
    default_price money,
    CHECK (default_price::numeric >= 0)
);

CREATE TABLE leashes
(
    serial_id     serial PRIMARY KEY,
    leashes_type  leashes_type        NOT NULL,
    material      material_of_leashes NOT NULL,
    length        REAL,
    diameter      REAL,
    strength      REAL,
    default_price money,
    CHECK ( length >= 0 ),
    CHECK ( diameter >= 0 ),
    CHECK ( strength >= 0 )
);

CREATE TABLE pack
(
    serial_id       SERIAL PRIMARY KEY,
    pack_type       pack_type NOT NULL,
    rod_id          int,
    coil_id         int,
    fishing_line_id int,
    FOREIGN KEY (coil_id) REFERENCES coil (serial_id),
    FOREIGN KEY (rod_id) REFERENCES rod (serial_id),
    FOREIGN KEY (fishing_line_id) REFERENCES fishing_line (serial_id)
);

CREATE TABLE lure
(
    serial_id     serial primary key,
    lure_type     lure_type NOT NULL,
    weight        REAL,
    buoyancy      REAL,
    amount        REAL,
    default_price money,
    CHECK ( default_price::numeric >= 0),
    check ( weight >= 0 ),
    CHECK ( buoyancy >= 0 ),
    CHECK ( amount >= 0 )
);


CREATE TABLE feeder
(
    serial_id     serial primary key,
    feeder_type   feeder_type NOT NULL,
    bracing       bracing     NOT NULL,
    weight        REAL,
    capacity      int,
    default_price money,
    CHECK ( weight >= 0 ),
    CHECK ( capacity >= 0 ),
    CHECK ( default_price::numeric >= 0 )
);


CREATE TABLE fish
(
    id         serial primary key,
    length_max REAL,
    length_min REAL,
    weight_max REAL,
    weight_min REAL,
    habitat    varchar(100),
    CHECK ( weight_min >= 0 ),
    CHECK ( length_min >= 0 )
);

CREATE TABLE fish_product_match
(
    id         serial primary key,
    fish_id    serial,
    product_id serial,
    foreign key (fish_id) references fish (id),
    foreign key (product_id) references base (id),
    foreign key (product_id) references additive (id),
    foreign key (product_id) references flavoring (id),
    foreign key (product_id) references sinker (serial_id),
    foreign key (product_id) references lure (serial_id),
    foreign key (product_id) references lure_complex (id)
);


Create Table lure_complex
(
    id            serial primary key,
    base          serial,
    additive_1    serial,
    additive_2    serial,
    additive_3    serial,
    additive_4    serial,
    flavoring     serial,
    default_price money,
    CHECK ( default_price::numeric >= 0 ),
    foreign key (base) references base (id) on delete cascade,
    foreign key (additive_1) references additive (id) on delete cascade,
    foreign key (additive_2) references additive (id) on delete cascade,
    foreign key (additive_3) references additive (id) on delete cascade,
    foreign key (additive_4) references additive (id) on delete cascade,
    foreign key (flavoring) references flavoring (id) on delete cascade
);


CREATE TABLE storage
(
    id      serial primary key,
    address varchar(100)
);

create TABLE product_storage_match
(
    id         serial primary key,
    product_id serial,
    storage_id serial,
    product_amount int,
    foreign key (storage_id) references storage (id) on delete cascade,
    foreign key (product_id) references fishing_line (serial_id) on delete cascade,
    foreign key (product_id) references rod (serial_id) on delete cascade,
    foreign key (product_id) references coil (serial_id) on delete cascade,
    foreign key (product_id) references hook (serial_id) on delete cascade,
    foreign key (product_id) references leashes (serial_id) on delete cascade,
    foreign key (product_id) references lure_complex (id) on delete cascade,
    foreign key (product_id) references base (id) on delete cascade,
    foreign key (product_id) references additive (id) on delete cascade,
    foreign key (product_id) references flavoring (id) on delete cascade,
    foreign key (product_id) references sinker (serial_id) on delete cascade,
    foreign key (product_id) references lure (serial_id) on delete cascade,
    foreign key (product_id) references bait (serial_id) on delete cascade,
    foreign key (product_id) references feeder (serial_id) on delete cascade

);

CREATE TABLE "user"(
                       id           serial primary key,
                       login        varchar(20) NOT NULL,
                       password     varchar(20) NOT NULL,
                       email        varchar(255),
                       admin_rights bool,
                       moder_rights bool
);

CREATE TABLE favorite(
                         user_id serial primary key,
                         product_id serial,
                         foreign key (user_id) references "user" (id),
                         foreign key (product_id) references fishing_line (serial_id) on delete cascade,
                         foreign key (product_id) references rod (serial_id) on delete cascade,
                         foreign key (product_id) references coil (serial_id) on delete cascade,
                         foreign key (product_id) references hook (serial_id) on delete cascade,
                         foreign key (product_id) references leashes (serial_id) on delete cascade,
                         foreign key (product_id) references lure_complex (id) on delete cascade,
                         foreign key (product_id) references base (id) on delete cascade,
                         foreign key (product_id) references additive (id) on delete cascade,
                         foreign key (product_id) references flavoring (id) on delete cascade,
                         foreign key (product_id) references sinker (serial_id) on delete cascade,
                         foreign key (product_id) references lure (serial_id) on delete cascade,
                         foreign key (product_id) references bait (serial_id) on delete cascade,
                         foreign key (product_id) references feeder (serial_id) on delete cascade
);
CREATE TABLE fishing_line (
                              serial_id SERIAL PRIMARY KEY,
                              name varchar(255) NOT NULL,
                              fishing_line_type fishing_line_type NOT NULL,
                              color color NOT NULL,
                              length REAL NOT NULL,
                              diameter REAL NOT NULL,
                              strength REAL NOT NULL,
                              default_price money NOT NULL,
                              CHECK (default_price::numeric > 0),
                              CHECK (strength > 0),
                              CHECK (diameter > 0),
                              CHECK (length >= 1)
);

CREATE TABLE coil (
                      serial_id SERIAL PRIMARY KEY,
                      name varchar(255) NOT NULL,
                      coil_type coil_type NOT NULL,
                      size INT NOT NULL,
                      gear_ratio REAL NOT NULL,
                      friction_brake_force REAL NOT NULL,
                      capacity INT NOT NULL,
                      line_diameter REAL NOT NULL,
                      default_price money NOT NULL,
                      CHECK (default_price::numeric > 0),
                      CHECK (capacity > 0),
                      CHECK (line_diameter > 0),
                      CHECK (friction_brake_force >= 1),
                      CHECK (gear_ratio >= 1),
                      CHECK ((size % 1000) = 0)
);

CREATE TABLE base (
                      id SERIAL PRIMARY KEY,
                      name varchar(255) NOT NULL,
                      default_price money NOT NULL,
                      CHECK (default_price::numeric > 0)
);

CREATE TABLE additive (
                          id SERIAL PRIMARY KEY,
                          name varchar(255) NOT NULL,
                          default_price money NOT NULL,
                          CHECK (default_price::numeric > 0)
);

CREATE TABLE flavoring(
                          id SERIAL PRIMARY KEY,
                          name varchar(255) NOT NULL,
                          default_price money NOT NULL,
                          CHECK (default_price::numeric > 0)
);

CREATE TABLE sinker (
                        serial_id SERIAL PRIMARY KEY,
                        name varchar(255) NOT NULL,
                        sinker_type sinker_type NOT NULL,
                        color color NOT NULL,
                        bracing bracing NOT NULL,
                        weight REAL NOT NULL,
                        default_price money NOT NULL,
                        CHECK (default_price::numeric > 0),
                        CHECK (weight > 0)
);

CREATE TABLE bait (
                      serial_id SERIAL PRIMARY KEY,
                      bait_type bait_type NOT NULL,
                      bait_size size_bait NOT NULL,
                      weight REAL NOT NULL,
                      length REAL NOT NULL,
                      deepening REAL,
                      default_price money NOT NULL,
                      CHECK (default_price::numeric > 0),
                      CHECK (deepening > 0),
                      CHECK (length > 0),
                      CHECK (weight > 0)
);

CREATE TABLE shop(
                     id SERIAL PRIMARY KEY,
                     address varchar(100) NOT NULL,
                     time_open timestamp NOT NULL,
                     time_close timestamp NOT NULL,
                     coefficient REAL NOT NULL
);

CREATE TABLE Product_Shop_Match (
                                    id SERIAL PRIMARY KEY,
                                    product_id SERIAL,
                                    shop_id SERIAL,
                                    new_price money,
                                    product_amount INT,
                                    CHECK (product_amount > -1),
                                    FOREIGN KEY (shop_id) REFERENCES shop(id) ON DELETE CASCADE,
                                    FOREIGN KEY (product_id) REFERENCES additive(id) ON DELETE CASCADE,
                                    FOREIGN KEY (product_id) REFERENCES bait(serial_id) ON DELETE CASCADE,
                                    FOREIGN KEY (product_id) REFERENCES base(id) ON DELETE CASCADE,
                                    FOREIGN KEY (product_id) REFERENCES coil(serial_id) ON DELETE CASCADE,
                                    FOREIGN KEY (product_id) REFERENCES feeder(serial_id) ON DELETE CASCADE,
                                    FOREIGN KEY (product_id) REFERENCES fishing_line(serial_id) ON DELETE CASCADE,
                                    FOREIGN KEY (product_id) REFERENCES flavoring(id) ON DELETE CASCADE,
                                    FOREIGN KEY (product_id) REFERENCES hook(serial_id) ON DELETE CASCADE,
                                    FOREIGN KEY (product_id) REFERENCES leashes(serial_id) ON DELETE CASCADE,
                                    FOREIGN KEY (product_id) REFERENCES lure(serial_id) ON DELETE CASCADE,
                                    FOREIGN KEY (product_id) REFERENCES lure_complex(id) ON DELETE CASCADE,
                                    FOREIGN KEY (product_id) REFERENCES pack(serial_id) ON DELETE CASCADE,
                                    FOREIGN KEY (product_id) REFERENCES rod(serial_id) ON DELETE CASCADE,
                                    FOREIGN KEY (product_id) REFERENCES sinker(serial_id) ON DELETE CASCADE
);

CREATE TABLE "order"
(
    id SERIAL PRIMARY KEY,
    user_id SERIAL,
    product_match SERIAL,
    order_time TIMESTAMP,
    product_amount INT,
    CHECK (product_amount > 0),
    FOREIGN KEY (user_id) REFERENCES "user"(id) ON DELETE CASCADE,
    FOREIGN KEY (product_match) REFERENCES additive(id) ON DELETE CASCADE,
    FOREIGN KEY (product_match) REFERENCES bait(serial_id) ON DELETE CASCADE,
    FOREIGN KEY (product_match) REFERENCES base(id) ON DELETE CASCADE,
    FOREIGN KEY (product_match) REFERENCES coil(serial_id) ON DELETE CASCADE,
    FOREIGN KEY (product_match) REFERENCES feeder(serial_id) ON DELETE CASCADE,
    FOREIGN KEY (product_match) REFERENCES fishing_line(serial_id) ON DELETE CASCADE,
    FOREIGN KEY (product_match) REFERENCES flavoring(id) ON DELETE CASCADE,
    FOREIGN KEY (product_match) REFERENCES hook(serial_id) ON DELETE CASCADE,
    FOREIGN KEY (product_match) REFERENCES leashes(serial_id) ON DELETE CASCADE,
    FOREIGN KEY (product_match) REFERENCES lure(serial_id) ON DELETE CASCADE,
    FOREIGN KEY (product_match) REFERENCES lure_complex(id) ON DELETE CASCADE,
    FOREIGN KEY (product_match) REFERENCES pack(serial_id) ON DELETE CASCADE,
    FOREIGN KEY (product_match) REFERENCES rod(serial_id) ON DELETE CASCADE,
    FOREIGN KEY (product_match) REFERENCES sinker(serial_id) ON DELETE CASCADE
);

ALTER SEQUENCE additive_id_seq RESTART WITH 1001;
ALTER SEQUENCE bait_serial_id_seq RESTART WITH 2001;
ALTER SEQUENCE base_id_seq RESTART WITH 3001;
ALTER SEQUENCE coil_serial_id_seq RESTART WITH 4001;
ALTER SEQUENCE feeder_serial_id_seq RESTART WITH 5001;
ALTER SEQUENCE fishing_line_serial_id_seq RESTART WITH 6001;
ALTER SEQUENCE flavoring_id_seq RESTART WITH 7001;
ALTER SEQUENCE hook_serial_id_seq RESTART WITH 8001;
ALTER SEQUENCE leashes_serial_id_seq RESTART WITH 9001;
ALTER SEQUENCE lure_serial_id_seq RESTART WITH 10001;
ALTER SEQUENCE rod_serial_id_seq RESTART WITH 11001;
ALTER SEQUENCE sinker_serial_id_seq RESTART WITH 12001;