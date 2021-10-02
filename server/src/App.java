import Config.Config;
import ServerHttp.ServerHttp;
import conexion.Conexion;
import util.console;

public class App {
    public static void main(String[] args) throws Exception {
        System.out.println("Welcome to reportLive!");
        System.setProperty("org.eclipse.jetty.util.log.announce", "false");
        if (!Config.validate()) {
            console.error("Server closed.");
            return;
        }
        Conexion.setConexion(Config.getJSON("data_base"));
        ServerHttp.Start(8080);
    }
}
