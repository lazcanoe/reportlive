package Config;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

import org.json.JSONObject;

public class Config {

    private static JSONObject config = null;
    
    public static boolean validate() {
        boolean repuesta = true;
        if (getJSON() != null) {
            JSONObject obj = getJSON();
        }
        return repuesta;
    }

    public static JSONObject getJSON() {
        try {
            if (config == null) {
                System.out.print("Leyendo archivos config.json");
                FileReader file = new FileReader("config.json");
                int valor = file.read();
                String configJson = "";
                while (valor != -1) {
                    configJson = configJson + String.valueOf(((char) valor));
                    valor = file.read();
                    System.out.print(".");
                }
                config = new JSONObject(configJson);
                System.out.println("100%");
                System.out.println("Ready.");

            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return config;
    }

    public static boolean setSocketCliente(JSONObject obj) {
        boolean repuesta = true;
        config.getJSONObject("socket_server").put("ip", obj.getJSONObject("data").getString("ip"));
        config.getJSONObject("socket_server").put("puerto", obj.getJSONObject("data").getInt("puerto"));
        FileWriter file;
        try {
            file = new FileWriter("config.json");
            file.write(config.toString());
            file.flush();
            file.close();

        } catch (IOException e) {
            System.out.println("error actualizar config  " + e);
            repuesta = false;
        }

        return repuesta;
    }

    public static JSONObject getJSON(String key) {

        return getJSON().getJSONObject(key);
    }
}