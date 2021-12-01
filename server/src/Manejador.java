import java.io.Console;
import org.json.JSONObject;
import Server.SSSAbstract.SSSessionAbstract;
import Servisofts.SConsole;
import component.Empresa;
import component.EquipoMedico;
import component.EquipoMedicoEmpresa;
import component.Fabricante;
import component.Oficina;
import component.Persona;
import component.Producto;
import component.Producto_bs;
import component.ServicioCliente;
import component.Tecnico;
import component.TipoServicio;

public class Manejador {
    public static void onMessage(JSONObject obj, SSSessionAbstract session) {
        if (session != null) {
            SConsole.log(session.getIdSession(), "\t|\t", obj.getString("component"), obj.getString("type"));
        }
        if (obj.isNull("component")) {
            return;
        }
        switch (obj.getString("component")) {
            case "empresa":
                Empresa.onMessage(obj);
                break;
            case "persona":
                Persona.onMessage(obj);
                break;
            case "fabricante":
                Fabricante.onMessage(obj);
                break;
            case "servicioCliente":
                ServicioCliente.onMessage(obj);
                break;
            case "tipoServicio":
                TipoServicio.onMessage(obj);
                break;
            case "equipoMedico":
                EquipoMedico.onMessage(obj);
                break;
            case "producto":
                Producto.onMessage(obj);
                break;
            case "equipoMedicoEmpresa":
                EquipoMedicoEmpresa.onMessage(obj);
                break;
            case "oficina":
                Oficina.onMessage(obj);
                break;
            case "tecnico":
                Tecnico.onMessage(obj);
                break;
            case "producto_bs":
                Producto_bs.onMessage(obj);
                break;
        }
    }
}
