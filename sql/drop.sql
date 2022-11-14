/* Удаление енамов */

DROP TYPE IF EXISTS action, bait_type, bracing, coil_type, color, feeder_type, fishing_line_type, hooks_type,
    leashes_type, lure_type, material_of_leashes, pack_type, power, rod_type, sinker_type, size_bait;

/* Удаление таблиц */

DROP TABLE IF EXISTS additive, bait, base, coil, favorite, feeder, fish, fish_product_match, fishing_line, flavoring,
    hook, leashes, lure, lure_complex, "order", pack, product_shop_match, product_storage_match, rod, shop, sinker,
    storage, "user";

