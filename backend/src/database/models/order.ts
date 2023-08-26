import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const order = sequelize.define(
    'order',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
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

  order.associate = (models) => {
    models.order.belongsTo(models.investor, {
      as: 'investor',
      constraints: false,
      foreignKey: {
        allowNull: false,
      },
    });

    models.order.belongsToMany(models.fund, {
      as: 'funds',
      constraints: false,
      through: 'orderFundsFund',
    });

    models.order.belongsTo(models.user, {
      as: 'employee',
      constraints: false,
    });

    models.order.hasMany(models.file, {
      as: 'attachments',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: models.order.getTableName(),
        belongsToColumn: 'attachments',
      },
    });
    
    models.order.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.order.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.order.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return order;
}
