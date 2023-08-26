import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const fundAsset = sequelize.define(
    'fundAsset',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      percentage: {
        type: DataTypes.DECIMAL(24, 2),
        validate: {
          min: 0.01,
        }
      },
      code: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
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
          fields: ['code', 'tenantId'],
          where: {
            deletedAt: null,
          },
        },
      ],
      timestamps: true,
      paranoid: true,
    },
  );

  fundAsset.associate = (models) => {
    models.fundAsset.belongsTo(models.fund, {
      as: 'fund',
      constraints: false,
      foreignKey: {
        allowNull: false,
      },
    });

    models.fundAsset.belongsTo(models.asset, {
      as: 'asset',
      constraints: false,
      foreignKey: {
        allowNull: false,
      },
    });


    
    models.fundAsset.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.fundAsset.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.fundAsset.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return fundAsset;
}
