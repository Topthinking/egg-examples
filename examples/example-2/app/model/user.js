module.exports =  app => {
  const { STRING, INTEGER } = app.Sequelize;

  const User =  app.model.define(
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

  User.findByLogin = async function(id) {
    return await this.findOne({
      where: {
        id: id
      }
    });
  }

  return User;

};
