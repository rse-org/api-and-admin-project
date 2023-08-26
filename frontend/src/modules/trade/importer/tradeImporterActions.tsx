import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/trade/importer/tradeImporterSelectors';
import TradeService from 'src/modules/trade/tradeService';
import fields from 'src/modules/trade/importer/tradeImporterFields';
import { i18n } from 'src/i18n';

const tradeImporterActions = importerActions(
  'TRADE_IMPORTER',
  selectors,
  TradeService.import,
  fields,
  i18n('entities.trade.importer.fileName'),
);

export default tradeImporterActions;