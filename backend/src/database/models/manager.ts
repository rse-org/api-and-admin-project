import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const manager = sequelize.define(
    'manager',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      firstName: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
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
      title: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      about: {
        type: DataTypes.TEXT,
      },
      school: {
        type: DataTypes.TEXT,
      },
      highestLevelEducation: {
        type: DataTypes.TEXT,
        validate: {
          isIn: [[
            "bachelors",
            "masters",
            "doctorate"
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

  manager.associate = (models) => {
    models.manager.belongsToMany(models.fund, {
      as: 'products',
      constraints: false,
      through: 'fundManagersManagerProducts',
    });

    models.manager.hasMany(models.file, {
      as: 'photos',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: models.manager.getTableName(),
        belongsToColumn: 'photos',
      },
    });
    
    models.manager.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.manager.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.manager.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return manager;
}
