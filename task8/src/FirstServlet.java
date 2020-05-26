import java.io.IOException;
import java.io.PrintWriter;
import java.util.Enumeration;

public class FirstServlet extends javax.servlet.http.HttpServlet {
    protected void doPost(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {
        response.setContentType("application/json");
        PrintWriter out = response.getWriter();
        Enumeration<String> ParameterNames = request.getParameterNames();
        out.print("{");
        while (ParameterNames.hasMoreElements()) {
            String name = ParameterNames.nextElement();
            String value = request.getParameter(name);
            out.print("\"" + name + "\"" + ":" + "\"" + value + "\"" + ";\n\t");
        }
        out.print("\"success\":true}");
        out.flush();
    }

    protected void doGet(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {
//        PrintWriter pw = response.getWriter();
//
//        pw.println("<html>");
//        pw.println("<h1> Hello world! </h1>");
//        pw.println("</html>");
    }
}
