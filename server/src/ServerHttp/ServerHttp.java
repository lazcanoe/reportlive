package ServerHttp;

import java.net.URI;
import util.console;

import org.apache.commons.io.FileUtils;
import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.util.Map;
import java.util.UUID;
import java.util.regex.Pattern;

import Config.Config;
import java.util.List;

import org.json.JSONArray;
import org.json.JSONObject;

import conexion.Conexion;

import java.nio.file.Files;
import java.io.IOException;
import java.io.InputStream;
import java.net.URLDecoder;
import java.nio.file.Paths;
import java.io.OutputStream;
import java.io.FileOutputStream;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.net.InetSocketAddress;
import java.io.UnsupportedEncodingException;
import org.apache.commons.fileupload.FileItem;
import org.jboss.com.sun.net.httpserver.Headers;
import org.jboss.com.sun.net.httpserver.HttpServer;
import org.apache.commons.fileupload.RequestContext;
import org.jboss.com.sun.net.httpserver.HttpContext;
import java.nio.file.attribute.PosixFilePermissions;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import org.jboss.com.sun.net.httpserver.HttpExchange;
import org.jboss.com.sun.net.httpserver.HttpPrincipal;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

public class ServerHttp {

    public static void Start(int puerto) {
        HttpServer server;
        try {
            console.log(console.ANSI_YELLOW, "** Iniciando HTTP-SERVER " + Config.getJSON().getString("ss") + " en el puerto " + puerto + " **");
            server = HttpServer.create(new InetSocketAddress(puerto), 0);
            //Instaciamos servlet de imagenes
         //   HttpContext context = server.createContext("/");
           // HttpContext contextMultipar = server.createContext("/multipart");
            //context.setHandler(ServerHttp::handleRequest);
            //Instaciamos servlet mannejador
            HttpContext contextManejador = server.createContext("/");
            contextManejador.setHandler(HandleRequestManejador::handle);
         //   contextMultipar.setHandler(ServerHttp::handleRequestMultipart);
            server.start();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

    }

    public static Map<String, String> splitQuery(String query) throws UnsupportedEncodingException {
        Map<String, String> query_pairs = new LinkedHashMap<String, String>();

        String[] pairs = query.split("&");
        for (String pair : pairs) {
            int idx = pair.indexOf("=");
            query_pairs.put(URLDecoder.decode(pair.substring(0, idx), "UTF-8"),
                    URLDecoder.decode(pair.substring(idx + 1), "UTF-8"));
        }
        return query_pairs;
    }

}