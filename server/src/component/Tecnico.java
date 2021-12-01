package component;

import java.sql.SQLException;

import org.json.JSONArray;
import org.json.JSONObject;

import conexion.Conexion;

public class Tecnico {

    public static void onMessage(JSONObject resp) {

        String type = resp.getString("type");
        switch (type) {
            case "getAll":
                getAll(resp);
                return;
            default:
            resp.put("estado", "error");
            resp.put("error","No existe el type");
        }

    }

    public static void getAll(JSONObject resp) {
        try {
            String consulta = "SELECT array_to_json(array_agg(tecnico.*)) as json FROM tecnico";
            JSONArray arr = Conexion.ejecutarConsultaArray(consulta);
            resp.put("data", arr);
            resp.put("estado", "exito");
        } catch (SQLException e) {
            resp.put("estado", "error");
            resp.put("error", e.getLocalizedMessage());
            e.printStackTrace();
        }

    }
}
