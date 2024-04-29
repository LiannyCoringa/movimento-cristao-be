const UserModel = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      fullName: DataTypes.STRING,
      email: DataTypes.STRING,
    });

    User.associate = (models) => {
      User.hasMany(models.Message, {
        foreignKey: 'userId',
        as: 'message',
      });
    };
  
    return User;
  };
  
  module.exports = UserModel;