using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net.Mail;
using MyBlog.Models;

namespace MyBlog.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    
    public class HelperController : ControllerBase
    {


        [HttpPost]
        public IActionResult SendContactEmail(Contact contact)
        {
            System.Threading.Thread.Sleep(3000);
            try
            {
                MailMessage mailMessage = new MailMessage();
                SmtpClient smtpClient = new SmtpClient("smtp.gmail.com");

                mailMessage.From = new MailAddress("aliefegulocak@gmail.com");
                mailMessage.To.Add("aliefegulocak@gmail.com"); //buraya mailler geliyor(sitenin maili olacak)
                mailMessage.Subject = contact.Subject;
                mailMessage.Body = contact.Message;
                mailMessage.IsBodyHtml = true;
                smtpClient.Port = 587;
                smtpClient.EnableSsl = true;
                smtpClient.UseDefaultCredentials = false;
                smtpClient.DeliveryMethod = SmtpDeliveryMethod.Network;
                smtpClient.Credentials = new System.Net.NetworkCredential("aliefegulocak@gmail.com","Tosmerspreyi2162");

                smtpClient.Send(mailMessage);

                return Ok();
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);

            }




          





        }
    
 





    }




}