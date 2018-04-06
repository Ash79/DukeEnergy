package ibm.io.api;

import ibm.io.model.Customer;

import io.swagger.annotations.*;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import javax.validation.constraints.*;
@javax.annotation.Generated(value = "ibm.io.languages.SpringCodegen", date = "2017-01-25T13:29:39.620Z")

@Api(value = "Customers", description = "the Customers API")
public interface CustomersApi {
      @ApiOperation(value = "", notes = "Gets all customers from the system that the user has access to", response = Customer.class, responseContainer = "List", tags={ "Customer", })
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "customer response", response = Customer.class),
        @ApiResponse(code = 404, message = "customer response", response = Customer.class),
        @ApiResponse(code = 500, message = "customer response", response = Customer.class) })
    @RequestMapping(value = "/customers",
        produces = { "application/json" },
        method = RequestMethod.GET)
    ResponseEntity<List<Customer>> getCustomer();
                    @ApiOperation(value = "", notes = "Puts all customers from the system that the user has access to", response = Customer.class, responseContainer = "List", tags={ "Customer", })
  @ApiResponses(value = {
      @ApiResponse(code = 204, message = "customer response", response = Customer.class),
      @ApiResponse(code = 404, message = "customer response", response = Customer.class),
      @ApiResponse(code = 500, message = "customer response", response = Customer.class) })
  @RequestMapping(value = "/customers",
      produces = { "application/json" },
      consumes = { "application/json" },
      method = RequestMethod.PUT)
  ResponseEntity<List<Customer>> putCustomer(@ApiParam(value = ""  ) @RequestBody Customer customer);
            @ApiOperation(value = "", notes = "Posts all customers from the system that the user has access to", response = Customer.class, responseContainer = "List", tags={ "Customer", })
  @ApiResponses(value = {
      @ApiResponse(code = 204, message = "customer response", response = Customer.class),
      @ApiResponse(code = 404, message = "customer response", response = Customer.class),
      @ApiResponse(code = 500, message = "customer response", response = Customer.class) })
  @RequestMapping(value = "/customers",
      produces = { "application/json" },
      consumes = { "application/json" },
      method = RequestMethod.POST)
  ResponseEntity<List<Customer>> postCustomer(@ApiParam(value = ""  ) @RequestBody Customer customer);
            @ApiOperation(value = "", notes = "Patchs all customers from the system that the user has access to", response = Customer.class, responseContainer = "List", tags={ "Customer", })
  @ApiResponses(value = {
      @ApiResponse(code = 204, message = "customer response", response = Customer.class),
      @ApiResponse(code = 404, message = "customer response", response = Customer.class),
      @ApiResponse(code = 500, message = "customer response", response = Customer.class) })
  @RequestMapping(value = "/customers",
      produces = { "application/json" },
      consumes = { "application/json" },
      method = RequestMethod.PATCH)
  ResponseEntity<List<Customer>> patchCustomer();
          @ApiOperation(value = "", notes = "Deletes all customers from the system that the user has access to", response = Customer.class, responseContainer = "List", tags={ "Customer", })
  @ApiResponses(value = {
      @ApiResponse(code = 204, message = "customer response", response = Customer.class),
      @ApiResponse(code = 404, message = "customer response", response = Customer.class),
      @ApiResponse(code = 500, message = "customer response", response = Customer.class) })
  @RequestMapping(value = "/customers",
      produces = { "application/json" },
      consumes = { "application/json" },
      method = RequestMethod.DELETE)
  ResponseEntity<List<Customer>> deleteCustomer(@ApiParam(value = ""  ) @RequestBody Customer customer);
          }
