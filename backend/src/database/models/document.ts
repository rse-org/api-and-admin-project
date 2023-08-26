import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const document = sequelize.define(
    'document',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
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

  document.associate = (models) => {
    models.document.belongsToMany(models.user, {
      as: 'investor',
      constraints: false,
      through: 'documentInvestorUser',
    });

    models.document.hasMany(models.file, {
      as: 'file',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: models.document.getTableName(),
        belongsToColumn: 'file',
      },
    });
    
    models.document.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.document.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.document.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return document;
}
