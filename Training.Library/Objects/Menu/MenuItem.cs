using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Training.Library.Objects.Menu
{
    public class MenuItem
    {
        public string Title { get; set; }
        public int Order { get; set; }
        public string Action { get; set; }
        public string Icon { get; set; }
        public bool CommingSoon { get; set; }

        public List<MenuItem> SubMenuItem { get; set; }

        public string GetFirstAction()
        {
            if (SubMenuItem != null && SubMenuItem.Count > 0)
            {
                var returnAction = string.Empty;

                foreach (var item in SubMenuItem)
                {
                    var firstAction = item.GetFirstAction();

                    if (!string.IsNullOrEmpty(firstAction))
                    {
                        if (string.IsNullOrEmpty(returnAction))
                        {
                            returnAction = firstAction;
                        }
                    }
                }

                return returnAction;
            }
            else
            {
                return GetAction();
            }
        }

        public string GetAction()
        {
            if (CommingSoon)
            {
                return "Home/CommingSoon";
            }

            return Action;
        }
    }
}
