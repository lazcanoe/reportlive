import org.json.JSONArray;
import org.json.JSONObject;

import Server.SSSAbstract.SSServerAbstract;
import Server.SSSAbstract.SSSessionAbstract;
import Servisofts.SConsole;

public class ManejadorCliente {
    public static void onMessage(JSONObject data, JSONObject config) {
        if (data.isNull("component")) {
            data.put("error", "No existe el componente");
            return;
        }
        if (data.has("estado")) {
            if (data.getString("estado").equals("error")) {
                SConsole.log("ERROR: " + data.get("error").toString());
            }
        }

        componentes(data, config);
    }

    public static void componentes(JSONObject data, JSONObject config) {
        switch (data.getString("component")) {
            case "usuario":
                usuario(data, config);
                break;
        }
    }

    public static void usuario(JSONObject data, JSONObject config) {
        switch (data.getString("type")) {
            case "recuperarPass": {
                // if (data.getString("estado").equals("exito")) {
                //     JSONObject mailConfig = new JSONObject();
                //     mailConfig.put("subject", "Recuperar contraseña");
                //     mailConfig.put("path", "mail/test2.html");
                //     new Email(new JSONArray().put(data.getJSONObject("data").getString("correo")), mailConfig);
                //     SConsole.log("Recuperar pass", data.getJSONObject("data").toString());
                // }
                break;
            }

        }
    }
}
