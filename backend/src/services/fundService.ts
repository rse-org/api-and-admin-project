import Error400 from '../errors/Error400';
import SequelizeRepository from '../database/repositories/sequelizeRepository';
import { IServiceOptions } from './IServiceOptions';
import FundRepository from '../database/repositories/fundRepository';
import FundAssetRepository from '../database/repositories/fundAssetRepository';
import ManagerRepository from '../database/repositories/managerRepository';
import AssetRepository from '../database/repositories/assetRepository';

export default class FundService {
  options: IServiceOptions;

  constructor(options) {
    this.options = options;
  }

  async create(data) {
    const transaction = await SequelizeRepository.createTransaction(
      this.options.database,
    );

    try {
      data.fundAssets = await FundAssetRepository.filterIdsInTenant(data.fundAssets, { ...this.options, transaction });
      data.managers = await ManagerRepository.filterIdsInTenant(data.managers, { ...this.options, transaction });
      data.assets = await AssetRepository.filterIdsInTenant(data.assets, { ...this.options, transaction });

      const record = await FundRepository.create(data, {
        ...this.options,
        transaction,
      });

      await SequelizeRepository.commitTransaction(
        transaction,
      );

      return record;
    } catch (error) {
      await SequelizeRepository.rollbackTransaction(
        transaction,
      );

      SequelizeRepository.handleUniqueFieldError(
        error,
        this.options.language,
        'fund',
      );

      throw error;
    }
  }

  async update(id, data) {
    const transaction = await SequelizeRepository.createTransaction(
      this.options.database,
    );

    try {
      data.fundAssets = await FundAssetRepository.filterIdsInTenant(data.fundAssets, { ...this.options, transaction });
      data.managers = await ManagerRepository.filterIdsInTenant(data.managers, { ...this.options, transaction });
      data.assets = await AssetRepository.filterIdsInTenant(data.assets, { ...this.options, transaction });

      const record = await FundRepository.update(
        id,
        data,
        {
          ...this.options,
          transaction,
        },
      );

      await SequelizeRepository.commitTransaction(
        transaction,
      );

      return record;
    } catch (error) {
      await SequelizeRepository.rollbackTransaction(
        transaction,
      );

      SequelizeRepository.handleUniqueFieldError(
        error,
        this.options.language,
        'fund',
      );

      throw error;
    }
  }

  async destroyAll(ids) {
    const transaction = await SequelizeRepository.createTransaction(
      this.options.database,
    );

    try {
      for (const id of ids) {
        await FundRepository.destroy(id, {
          ...this.options,
          transaction,
        });
      }

      await SequelizeRepository.commitTransaction(
        transaction,
      );
    } catch (error) {
      await SequelizeRepository.rollbackTransaction(
        transaction,
      );
      throw error;
    }
  }

  async findById(id) {
    return FundRepository.findById(id, this.options);
  }

  async findAllAutocomplete(search, limit) {
    return FundRepository.findAllAutocomplete(
      search,
      limit,
      this.options,
    );
  }

  async findAndCountAll(args) {
    return FundRepository.findAndCountAll(
      args,
      this.options,
    );
  }

  async import(data, importHash) {
    if (!importHash) {
      throw new Error400(
        this.options.language,
        'importer.errors.importHashRequired',
      );
    }

    if (await this._isImportHashExistent(importHash)) {
      throw new Error400(
        this.options.language,
        'importer.errors.importHashExistent',
      );
    }

    const dataToCreate = {
      ...data,
      importHash,
    };

    return this.create(dataToCreate);
  }

  async _isImportHashExistent(importHash) {
    const count = await FundRepository.count(
      {
        importHash,
      },
      this.options,
    );

    return count > 0;
  }
}
