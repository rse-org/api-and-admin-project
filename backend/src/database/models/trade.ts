import { DataTypes } from 'sequelize';import SequelizeArrayUtils from '../utils/sequelizeArrayUtils';

export default function (sequelize) {
  const trade = sequelize.define(
    'trade',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      value: {
        type: DataTypes.DECIMAL,
      },
      status: {
        type: SequelizeArrayUtils.DataType,
        validate: {
          isValidOption: function (value) {
            if (!value || !value.length) {
              return value;
            }

            const validOptions: any = [
        "open",
        "in_progress",
        "filled",
        "closed",
        "cancelled"
      ];

            if (
              value.some(
                (item) => !validOptions.includes(item),
              )
            ) {
              throw new Error(
                `${value} is not a valid option`,
              );
            }

            return value;
          },
        },
      },
      executeDate: {
        type: DataTypes.DATE,
      },
      valueOnExecute: {
        type: DataTypes.DECIMAL(24, 2),
        validate: {
          min: 0.01,
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

      ],
      timestamps: true,
      paranoid: true,
    },
  );

  trade.associate = (models) => {
    models.trade.belongsTo(models.investor, {
      as: 'investor',
      constraints: false,
      foreignKey: {
        allowNull: false,
      },
    });

    models.trade.belongsTo(models.fund, {
      as: 'product',
      constraints: false,
      foreignKey: {
        allowNull: false,
      },
    });


    
    models.trade.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.trade.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.trade.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return trade;
}
