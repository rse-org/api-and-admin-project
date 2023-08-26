import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/reward/importer/rewardImporterSelectors';
import RewardService from 'src/modules/reward/rewardService';
import fields from 'src/modules/reward/importer/rewardImporterFields';
import { i18n } from 'src/i18n';

const rewardImporterActions = importerActions(
  'REWARD_IMPORTER',
  selectors,
  RewardService.import,
  fields,
  i18n('entities.reward.importer.fileName'),
);

export default rewardImporterActions;