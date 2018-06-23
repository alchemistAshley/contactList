module.exports = function(sequelize, DataTypes) {
    var Contact = sequelize.define("Contact", {

        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 30]
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 30]
            }
        },
        contactType: {
            type: DataTypes.STRING,
            defaultValue: "Personal"
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [10, 20],
                isNumeric: true
            }
        },
        emailAddress: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isEmail: {
                    msg: "Email address must be valid"
                }
            }
        }
        
    });
    // be sure to return the model!
    return Contact;
};
