package component;

import org.json.JSONArray;
import org.json.JSONObject;

public class Manejador {

    public static void onMessage(JSONObject resp) {
        String component = resp.getString("component");
        switch (component) {
            case "empresa":
                Empresa.onMessage(resp);
                break;
            case "persona":
                Persona.onMessage(resp);
                break;
            case "fabricante":
                Fabricante.onMessage(resp);
                break;
            case "servicioCliente":
                ServicioCliente.onMessage(resp);
                break;
            case "tipoServicio":
                TipoServicio.onMessage(resp);
                break;
        }

    }
}
