using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Base.Startup))]
namespace Base
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
