import { SAssets } from 'servisofts-component'

import Logo, { ReactComponent as LogoW } from './svg/logo.svg';
import GlupPage, { ReactComponent as GlupPageW } from './svg/glupPage.svg';
import Tarifas, { ReactComponent as TarifasW } from './svg/tarifas.svg';
import Parametros, { ReactComponent as ParametrosW } from './svg/parametros.svg';
import Sad, { ReactComponent as SadW } from './svg/sad.svg';
import Smile, { ReactComponent as SmileW } from './svg/smile.svg';
import GlupPaquete, { ReactComponent as GlupPaqueteW } from './svg/gluppaquete.svg';
import GlupAmigos, { ReactComponent as GlupAmigosW } from './svg/glupamigos.svg';
const Assets: SAssets = {
    svg: {
        "Logo": { Native: Logo, Web: LogoW },
        "GlupPage": { Native: GlupPage, Web: GlupPageW },
        "Tarifas": { Native: Tarifas, Web: TarifasW },
        "Parametros": { Native: Parametros, Web: ParametrosW },
        "Sad": { Native: Sad, Web: SadW },
        "Smile": { Native: Smile, Web: SmileW },
        "GlupPaquete": { Native: GlupPaquete, Web: GlupPaqueteW },
        "GlupAmigos": { Native: GlupAmigos, Web: GlupAmigosW },
    }
}

export default Assets;