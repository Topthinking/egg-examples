export default app => {
  const { STRING, INTEGER } = app.Sequelize;

  return app.model.define(
    'user',
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: STRING,
    },
    {
      freezeTableName: true,
      timestamps: false,
    },
  );
};
