import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const reward = sequelize.define(
    'reward',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
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

  reward.associate = (models) => {
    models.reward.belongsTo(models.investor, {
      as: 'investor',
      constraints: false,
    });

    models.reward.belongsTo(models.investor, {
      as: 'affiliate',
      constraints: false,
    });


    
    models.reward.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.reward.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.reward.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return reward;
}
