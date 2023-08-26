import { DataTypes } from 'sequelize';import moment from 'moment';

export default function (sequelize) {
  const investor = sequelize.define(
    'investor',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      firstName: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          len: [2, 255],
          notEmpty: true,
        }
      },
      lastName: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      email: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      phone: {
        type: DataTypes.TEXT,
      },
      birthdate: {
        type: DataTypes.DATEONLY,
        get: function() {
          // @ts-ignore
          return this.getDataValue('birthdate')
            ? moment
                // @ts-ignore
                .utc(this.getDataValue('birthdate'))
                .format('YYYY-MM-DD')
            : null;
        },
      },
      gender: {
        type: DataTypes.TEXT,
        validate: {
          isIn: [[
            "m",
            "f"
          ]],
        }
      },
      theme: {
        type: DataTypes.TEXT,
        validate: {
          isIn: [[
            "light",
            "dark"
          ]],
        }
      },
      importHash: {
        type: DataTypes.STRING(255),
        allowNull: true,    
        validate: {
          len: [0, 255],
        },    
      },
    },
    {
      indexes: [
        {
          unique: true,
          fields: ['importHash', 'tenantId'],
          where: {
            deletedAt: null,
          },
        },
        {
          unique: true,
          fields: ['email', 'tenantId'],
          where: {
            deletedAt: null,
          },
        },
      ],
      timestamps: true,
      paranoid: true,
    },
  );

  investor.associate = (models) => {
    models.investor.belongsToMany(models.fund, {
      as: 'products',
      constraints: false,
      through: 'investorProductsFund',
    });


    
    models.investor.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.investor.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.investor.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return investor;
}
