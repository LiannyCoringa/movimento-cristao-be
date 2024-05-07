const MessageModel = (sequelize, DataTypes) => {
    const Message = sequelize.define('Message', {
      message: DataTypes.TEXT,
      date: DataTypes.STRING,
      url: DataTypes.STRING,
      userId: {
        type: DataTypes.INTEGER,
        foreignKey: true },
    },
    {
      timestamps: false,
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