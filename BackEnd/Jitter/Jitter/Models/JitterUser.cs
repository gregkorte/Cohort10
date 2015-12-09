using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Jitter.Models
{
    public class JitterUser : IComparable
    {
        [Key]
        public int JitterUserId { get; set; }
        [Required]
        [MaxLength(20)]
        [MinLength(3)]
        [RegularExpression(@"^[a-zA-Z\d]+[-_a-zA-Z\d]{0,2}[a-zA-Z\d]+")]
        public string Handle { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Picture { get; set; }
        [MaxLength(161)]
        public string Description { get; set; }

        // ICollection, IEnumerable, IQueryable
        public List<Jot> Jots { get; set; }
        public List<JitterUser> Following { get; set; }

        public int CompareTo(object obj)
        {
            // Let's sort user based on their handles because handles are strings AND...
            // .NET knows how to compare strings already. Ha!
            // We need to explicitly cast from object type to JitterUser type

            JitterUser other_user = obj as JitterUser;
            int answer = this.Handle.CompareTo(other_user.Handle);
            return answer;
        }
    }
}