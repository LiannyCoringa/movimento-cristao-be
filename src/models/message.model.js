const MessageModel = (sequelize, DataTypes) => {
    const Message = sequelize.define('Message', {
      message: DataTypes.LONGTEXT,
      date: DataTypes.DATE,
      userId: {
        type: DataTypes.INTEGER,
        foreignKey: true },
    });

    Message.associate = (models) => {
      Message.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
      });
    };
    return Message;
  };
  
  module.exports = MessageModel;