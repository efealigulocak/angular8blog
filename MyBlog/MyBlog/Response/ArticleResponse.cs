using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyBlog.Response
{
    public class ArticleResponse
    {
        public int id { set; get; }
        public string Title { set; get; }

        public string ContentMain { set; get; }

        public string ContentSummary { set; get; }

        public DateTime PublishDate { set; get; }

        public string Picture { set; get; }

        public int ViewCount { set; get; }


        public int CommentCount { set; get; }

        
        public CategoryResponse Category { set; get; }
                
        

         






    }
}

