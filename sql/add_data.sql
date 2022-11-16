INSERT INTO additive(name, default_price) VALUES ('вареное пшено', 0.4);

INSERT INTO bait(bait_type, bait_size, weight, length, deepening, default_price)
VALUES ('spinner', 'small', 2.5, 4, NULL, 1.8);

INSERT INTO base(name, default_price) VALUES ('молотые сухари', 0.6);

INSERT INTO coil(name, coil_type, size, gear_ratio, friction_brake_force, capacity, line_diameter, default_price)
VALUES ('beluga venga','inertialess', 6000, 5.5, 22.6, 248, 0.28, 18790.96);

INSERT INTO coil(name, coil_type, size, gear_ratio, friction_brake_force, capacity, line_diameter, default_price)
VALUES ('beluga venga','inertialess', 6000, 5.5, 22.6, 199, 0.32, 18790.96);

INSERT INTO coil(name, coil_type, size, gear_ratio, friction_brake_force, capacity, line_diameter, default_price)
VALUES ('beluga venga','inertialess', 6000, 5.5, 22.6, 164, 0.36, 18790.96);

INSERT INTO feeder(feeder_type, bracing, weight, capacity, default_price)
VALUES ('classic', 'swivel', 60, 1, 30.7);

INSERT INTO fishing_line(name, fishing_line_type, color, length, diameter, strength, default_price)
VALUES ('Express fishing super line', 'neylon', 'clear', 120, 0.1, 0.7, 6);

INSERT INTO flavoring(name, default_price) VALUES ('Подсолнечное масло', 0.9);

INSERT INTO hook(name, hook_type, size, weight, color, default_price)
VALUES ('Simmons deadly loop', 'carp', 12, 0.33, 'brown', 25.4);

INSERT INTO leashes(leashes_type, material, length, diameter, strength, default_price)
VALUES ('default', 'metalic', 15, 0.25, 6, 1.20);

INSERT INTO lure(lure_type, weight, buoyancy, amount, default_price)
VALUES ('worm', 1, 0, 30, 1.8);

INSERT INTO rod(name, rod_type, action, hardness, power, test_max, test_min, length, strength, weight, default_price)
VALUES ('Kingfisher Legacy Ti', 'carp', 'medium', 8, 'hard', 120, 40, 3.6, 70.2, 270, 16603.79);

INSERT INTO sinker(name, sinker_type, color, bracing, weight, default_price)
VALUES ('Westhill Flat sinker', 'bottom_classic', 'grey', 'swivel', 14, 5.8);