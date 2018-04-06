package ibm.io.api;

import ibm.io.model.Customer;
import io.swagger.annotations.*;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.type.TypeFactory;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

@javax.annotation.Generated(value = "ibm.io.languages.SpringCodegen", date = "2017-01-25T13:29:39.620Z")

@Controller
public class CustomersApiController implements CustomersApi {
                  
        public ResponseEntity<List<Customer>> getCustomer() {
    	List<Customer> customerList = new ArrayList<Customer>();
            	ObjectMapper mapper = new ObjectMapper();
      	try {
          InputStream inputStream = this.getClass().getResourceAsStream("/sampleData/Customer.json");
          customerList = mapper.readValue(inputStream, TypeFactory.defaultInstance().constructCollectionType(List.class, Customer.class));
      		//CustomerList = mapper.readValue(new File("/Users/rajeshlagisetty/Desktop/Cedrus/training/generators/01252017/sampleData/Customer.json"), TypeFactory.defaultInstance().constructCollectionType(List.class, Customer.class));
  		} catch (JsonParseException e) {
  			// TODO Auto-generated catch block
  			e.printStackTrace();
  		} catch (JsonMappingException e) {
  			// TODO Auto-generated catch block
  			e.printStackTrace();
  		} catch (IOException e) {
  			// TODO Auto-generated catch block
  			e.printStackTrace();
  		}
              // do some magic!
        return new ResponseEntity<List<Customer>>(customerList, HttpStatus.OK);
    }
                          public ResponseEntity<List<Customer>> putCustomer(@ApiParam(value = ""  ) @RequestBody Customer Customer) {
        // do some magic!
        return new ResponseEntity<List<Customer>>(HttpStatus.OK);
    }
    
                      public ResponseEntity<List<Customer>> postCustomer(@ApiParam(value = ""  ) @RequestBody Customer Customer) {
        // do some magic!
        return new ResponseEntity<List<Customer>>(HttpStatus.OK);
    }
        
                  public ResponseEntity<List<Customer>> patchCustomer() {
        // do some magic!
        return new ResponseEntity<List<Customer>>(HttpStatus.OK);
    }
            
              public ResponseEntity<List<Customer>> deleteCustomer(@ApiParam(value = ""  ) @RequestBody Customer Customer) {
        // do some magic!
        return new ResponseEntity<List<Customer>>(HttpStatus.OK);
    }
                
        

}
