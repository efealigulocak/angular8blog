using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyBlog.Models;

namespace MyBlog.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AuthController : ControllerBase
    {

        [HttpPost]
        public IActionResult IsAuthenticated(AdminUser adminUser)
        {
            bool status = false;

            if (adminUser.Email == "f@outlook.com" && adminUser.Password == "1234")
            {

                status = true;

            }

                var result = new
                {

                    status = status

                };

                return Ok(result);   //json verisine otomatik döncek bir şey gondermek istiyorsak kompleks class bir şey döndürmeliyiz



            }
           
        }


    }
