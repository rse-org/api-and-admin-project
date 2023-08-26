import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const fund = sequelize.define(
    'fund',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          len: [2, 255],
          notEmpty: true,
        }
      },
      subtitle: {
        type: DataTypes.TEXT,
      },
      intro: {
        type: DataTypes.STRING(250),
        validate: {
          len: [0, 250],
        }
      },
      description: {
        type: DataTypes.TEXT,
        validate: {
          len: [0, 21845],
        }
      },
      annualizedReturn: {
        type: DataTypes.DECIMAL,
      },
      assetClass: {
        type: DataTypes.TEXT,
        validate: {
          isIn: [[
            "stocks",
            "bonds",
            "real estate",
            "crypto",
            "mutual fund"
          ]],
        }
      },
      strategyExpenses: {
        type: DataTypes.DECIMAL,
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
          fields: ['name', 'tenantId'],
          where: {
            deletedAt: null,
          },
        },
      ],
      timestamps: true,
      paranoid: true,
    },
  );

  fund.associate = (models) => {
    models.fund.belongsToMany(models.fundAsset, {
      as: 'fundAssets',
      constraints: false,
      through: 'fundFundAssetsFundAsset',
    });

    models.fund.belongsToMany(models.manager, {
      as: 'managers',
      constraints: false,
      through: 'fundManagersManagerProducts',
    });

    models.fund.belongsToMany(models.asset, {
      as: 'assets',
      constraints: false,
      through: 'assetFundFundAssets',
    });

    models.fund.hasMany(models.file, {
      as: 'photos',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: models.fund.getTableName(),
        belongsToColumn: 'photos',
      },
    });

    models.fund.hasMany(models.file, {
      as: 'icon',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: models.fund.getTableName(),
        belongsToColumn: 'icon',
      },
    });
    
    models.fund.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.fund.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.fund.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return fund;
}
