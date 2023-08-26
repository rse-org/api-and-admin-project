import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const asset = sequelize.define(
    'asset',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.TEXT,
      },
      sym: {
        type: DataTypes.TEXT,
      },
      price: {
        type: DataTypes.DECIMAL(24, 2),
        validate: {
          min: 0.01,
        }
      },
      hq: {
        type: DataTypes.TEXT,
      },
      ceo: {
        type: DataTypes.TEXT,
      },
      employees: {
        type: DataTypes.INTEGER,
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

  asset.associate = (models) => {
    models.asset.belongsToMany(models.fund, {
      as: 'fund',
      constraints: false,
      through: 'assetFundFundAssets',
    });

    models.asset.hasMany(models.file, {
      as: 'icon',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: models.asset.getTableName(),
        belongsToColumn: 'icon',
      },
    });
    
    models.asset.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.asset.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.asset.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return asset;
}
