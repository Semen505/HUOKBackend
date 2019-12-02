const Sequelize = require('sequelize');

module.exports = function(sequelize){
    const Profile = sequelize.define('Profile', {
        id: {
            primaryKey: true,
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true
        },
        user_id: {
            type: Sequelize.CHAR,
            allowNull: false,
        },
        first_name: {
            type:Sequelize.STRING
        },
        last_name: {
            type:Sequelize.STRING
        },
        bio: {
            type:Sequelize.STRING
        },
        portfolio: {
            type:Sequelize.STRING
        },
        phone_security_key: {
            type:Sequelize.STRING
        },
        phone_verified: {
            type:Sequelize.BOOLEAN
        }
    }, 
    {
        timestamp: true
    });
    Profile.associate = function(models) {
        Profile.belongsTo(models.user, { foreignKey: 'user_id' })
    };

    return Profile;
};