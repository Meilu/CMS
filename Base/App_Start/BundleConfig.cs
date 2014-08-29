using System.Web.Optimization;

namespace Base
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
          // register basic bundles here

            bundles.Add(new StyleBundle("~/BaseStyles").Include(
                 "~/Content/components/pure/pure.css",
                 "~/Content/components/font-awesome/css/font-awesome.css"));

            bundles.Add(new ScriptBundle("~/BaseScripts").Include(
                 "~/Content/components/knockout/dist/knockout.js",
                 "~/Content/components/jquery/dist/jquery.js",
                 "~/Content/components/knockout-mapping/knockout.mapping.js"));

        }
    }
}
