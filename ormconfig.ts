module.exports = {
    type: "postgres",
    url: process.env.DATABASE_URI,
    entities: ['./src/entities/**/*.entity.ts'],
    seeds: ['src/database/seeding/seeds/**/*{.ts,.js}'],
    factories: ['src/database/seeding/factories/**/*{.ts,.js}'],
}