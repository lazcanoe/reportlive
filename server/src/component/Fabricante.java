package component;

import java.sql.SQLException;

import org.json.JSONArray;
import org.json.JSONObject;

import Servisofts.SPGConect;


public class Fabricante {

    public static void onMessage(JSONObject resp) {

        String type = resp.getString("type");
        switch (type) {
            case "getAll":
                getAll(resp);
                return;
            default:
            resp.put("estado", "error");
            resp.put("error","No existe eñ type");
        }

    }

    public static void getAll(JSONObject resp) {
        try {
            String consulta = "SELECT array_to_json(array_agg(fabricante.*)) as json FROM fabricante";
            JSONArray arr = SPGConect.ejecutarConsultaArray(consulta);
            resp.put("data", arr);
            resp.put("estado", "exito");
        } catch (SQLException e) {
            resp.put("estado", "error");
            resp.put("error", e.getLocalizedMessage());
            e.printStackTrace();
        }

    }
}
