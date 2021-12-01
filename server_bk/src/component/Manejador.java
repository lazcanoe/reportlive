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
            case "equipoMedico":
                EquipoMedico.onMessage(resp);
                break;
            case "producto":
                Producto.onMessage(resp);
                break;
            case "equipoMedicoEmpresa":
                EquipoMedicoEmpresa.onMessage(resp);
                break;
            case "oficina":
                Oficina.onMessage(resp);
                break;
            case "tecnico":
                Tecnico.onMessage(resp);
                break;
            case "producto_bs":
                Producto_bs.onMessage(resp);
                break;
        }

    }
}
