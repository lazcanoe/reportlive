package ServerHttp;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.List;
import java.util.Map.Entry;
import java.io.UnsupportedEncodingException;
import java.io.ObjectOutputStream.PutField;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.RequestContext;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

import org.jboss.com.sun.net.httpserver.HttpExchange;
import org.json.JSONArray;
import org.json.JSONObject;

import component.Manejador;



public class HandleRequestManejador {
    
    public static void handle(HttpExchange t) throws IOException {
        for (Entry<String, List<String>> header : t.getRequestHeaders().entrySet()) {
            // System.out.println(header.getKey() + ": " + header.getValue().get(0));
        }
        DiskFileItemFactory d = new DiskFileItemFactory();
        try {
            ServletFileUpload up = new ServletFileUpload(d);
            List<FileItem> result = up.parseRequest(new RequestContext() {
                @Override
                public String getCharacterEncoding() {
                    return "UTF-8";
                }

                @Override
                public int getContentLength() {
                    return 0; // tested to work with 0 as return
                }

                @Override
                public String getContentType() {
                    return t.getRequestHeaders().getFirst("Content-type");
                }

                @Override
                public InputStream getInputStream() throws IOException {
                    return t.getRequestBody();
                }

            });
            t.getResponseHeaders().add("Access-Control-Allow-Origin", "*");
            t.getResponseHeaders().add("Content-type", "text/plain");
            t.sendResponseHeaders(200, 0);
            OutputStream os = t.getResponseBody();
            String data = "";
            for (FileItem fi : result) {
                switch (fi.getFieldName()) {
                    case "data":
                        data = fi.getString();
                        break;
                }
            }
            
            JSONObject dataJson = new JSONObject(data);
            Manejador.onMessage(dataJson);
           
           //os.write(obj.toString().getBytes());
           os.write(dataJson.toString().getBytes());
            os.write("\r\n".getBytes());
            os.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
