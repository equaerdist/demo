CREATE TABLE IF NOT EXISTS units (
    id              SERIAL PRIMARY KEY,
    name            VARCHAR(256)
);

CREATE TABLE IF NOT EXISTS units_relations (
    id                          SERIAL PRIMARY KEY,
    parent_id       INTEGER     REFERENCES units(id),
    child_id        INTEGER     REFERENCES units(id)
);

CREATE TABLE IF NOT EXISTS employees (
    id                              SERIAL PRIMARY KEY,
    unit_id         INTEGER         REFERENCES units(id),
    role_name       VARCHAR(256),
    name            VARCHAR(256),
    family_name     VARCHAR(256),
    middle_name     VARCHAR(256),   
    phone           VARCHAR(256),
    city            VARCHAR(256),
    project         VARCHAR(256),
    office_address  VARCHAR(256),
    position        VARCHAR(256),
    birth_date      VARCHAR(256),
    is_general      BOOLEAN
);