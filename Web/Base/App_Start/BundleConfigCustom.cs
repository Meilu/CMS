using System.Web.Optimization;

namespace Base
{
    public class BundleConfigCustom
    {
        public static void RegisterCustomBundles(BundleCollection bundles)
        {
            // register basic bundles here
            bundles.Add(new StyleBundle("~/CustomStyles").Include(
                 "~/Content/css/main.css"));

        }
    }
}
