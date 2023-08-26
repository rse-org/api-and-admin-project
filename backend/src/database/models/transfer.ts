import { DataTypes } from 'sequelize';import moment from 'moment';

export default function (sequelize) {
  const transfer = sequelize.define(
    'transfer',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      direction: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
          isIn: [[
            "credit",
            "debit"
          ]],
        }
      },
      value: {
        type: DataTypes.DECIMAL(24, 2),
        allowNull: false,
        validate: {
          min: 0.01,
        }
      },
      status: {
        type: DataTypes.TEXT,
        validate: {
          isIn: [[
            "submitted",
            "processing",
            "cancelled",
            "closed",
            "completed"
          ]],
        }
      },
      completeDate: {
        type: DataTypes.DATEONLY,
        get: function() {
          // @ts-ignore
          return this.getDataValue('completeDate')
            ? moment
                // @ts-ignore
                .utc(this.getDataValue('completeDate'))
                .format('YYYY-MM-DD')
            : null;
        },
      },
      clearingHouse: {
        type: DataTypes.TEXT,
      },
      clearingHouseTransactionId: {
        type: DataTypes.TEXT,
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

      ],
      timestamps: true,
      paranoid: true,
    },
  );

  transfer.associate = (models) => {
    models.transfer.belongsTo(models.investor, {
      as: 'investor',
      constraints: false,
      foreignKey: {
        allowNull: false,
      },
    });


    
    models.transfer.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.transfer.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.transfer.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return transfer;
}
