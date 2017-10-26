using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Poc_React.Startup))]
namespace Poc_React
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
        }
    }
}
